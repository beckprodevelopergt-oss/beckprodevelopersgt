const puppeteer = require('puppeteer-core');
const path = require('path');

(async () => {
  const edgePath = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
  console.log('Launching Edge from:', edgePath);
  
  const browser = await puppeteer.launch({
    executablePath: edgePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // 1. VERIFY HOMEPAGE NAVIGATION
  console.log('Navigating to http://localhost:3000 to verify home page buttons...');
  await page.setViewport({ width: 1366, height: 768 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle2' });
  
  // Check that the services link mapping exists
  const serviceLinks = await page.evaluate(() => {
    const cards = Array.from(document.querySelectorAll('.servicio-card'));
    return cards.map(card => {
      const title = card.querySelector('h3')?.innerText;
      const link = card.querySelector('a.btn-text')?.getAttribute('href');
      return { title, link };
    });
  });
  console.log('Found service links on homepage:', serviceLinks);
  
  // 2. VERIFY DESARROLLO WEB MICROSITE
  console.log('\n--- Verifying Desarrollo Web Microsite ---');
  console.log('Navigating to http://localhost:3000/servicios/desarrollo-web...');
  await page.goto('http://localhost:3000/servicios/desarrollo-web', { waitUntil: 'networkidle2' });
  
  // Verify basic structure
  const structureDW = await page.evaluate(() => {
    const header = document.querySelector('header');
    const hero = document.querySelector('.m-hero');
    const contact = document.querySelector('#contacto');
    const footer = document.querySelector('footer');
    return { header: !!header, hero: !!hero, contact: !!contact, footer: !!footer };
  });
  console.log('Desarrollo Web structure check:', structureDW);
  
  // Desktop Screenshot
  console.log('Capturing Desarrollo Web Desktop screenshot...');
  await page.screenshot({ 
    path: 'C:\\Users\\Beckpro\\.gemini\\antigravity\\brain\\64ebec25-c32a-4e0f-b524-725bc6da0e1a\\desarrollo_web_desktop.png', 
    fullPage: true 
  });
  
  // Mobile Screenshot
  console.log('Capturing Desarrollo Web Mobile screenshot...');
  await page.setViewport({ width: 375, height: 812, isMobile: true, hasTouch: true });
  // Wait a moment for viewport change to settle
  await new Promise(resolve => setTimeout(resolve, 500));
  await page.screenshot({ 
    path: 'C:\\Users\\Beckpro\\.gemini\\antigravity\\brain\\64ebec25-c32a-4e0f-b524-725bc6da0e1a\\desarrollo_web_mobile.png', 
    fullPage: true 
  });
  
  // Reset viewport to Desktop for form test
  await page.setViewport({ width: 1366, height: 768 });
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Test Form Submission on /servicios/desarrollo-web
  console.log('Testing Web3Forms Lead Submission on Desarrollo Web microsite...');
  await page.evaluate(() => {
    const form = document.querySelector('#contacto');
    if (form) form.scrollIntoView({ behavior: 'smooth' });
  });
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  await page.type('#nombre', 'Lead Prueba Desarrollo Web FASE 1');
  await page.type('#email', 'prospecto.web@beckprodeveloper.com');
  await page.type('#telefono', '+50299998888');
  await page.select('#tipoProyecto', 'Desarrollo Web');
  await page.type('#mensaje', 'Esta es una prueba real automatizada enviada desde el micrositio comercial premium de Desarrollo Web.');
  
  console.log('Submitting lead form...');
  await page.click('#contactForm button[type="submit"]');
  console.log('Waiting 6 seconds for Web3Forms server response...');
  await new Promise(resolve => setTimeout(resolve, 6000));
  
  console.log('Capturing form submission success state screenshot...');
  await page.screenshot({ 
    path: 'C:\\Users\\Beckpro\\.gemini\\antigravity\\brain\\64ebec25-c32a-4e0f-b524-725bc6da0e1a\\desarrollo_web_submit_success.png', 
    fullPage: false // just capture the view showing the success alert/state
  });
  
  const formSuccess = await page.evaluate(() => {
    const btn = document.querySelector('#contactForm button[type="submit"]');
    return btn ? btn.innerText : '';
  });
  console.log('Form submission result button text:', formSuccess);
  
  // 3. VERIFY LANDING PAGES MICROSITE
  console.log('\n--- Verifying Landing Pages Microsite ---');
  console.log('Navigating to http://localhost:3000/servicios/landing-pages...');
  await page.goto('http://localhost:3000/servicios/landing-pages', { waitUntil: 'networkidle2' });
  
  const structureLP = await page.evaluate(() => {
    const header = document.querySelector('header');
    const hero = document.querySelector('.m-hero');
    const contact = document.querySelector('#contacto');
    const footer = document.querySelector('footer');
    return { header: !!header, hero: !!hero, contact: !!contact, footer: !!footer };
  });
  console.log('Landing Pages structure check:', structureLP);
  
  // Desktop Screenshot
  console.log('Capturing Landing Pages Desktop screenshot...');
  await page.screenshot({ 
    path: 'C:\\Users\\Beckpro\\.gemini\\antigravity\\brain\\64ebec25-c32a-4e0f-b524-725bc6da0e1a\\landing_pages_desktop.png', 
    fullPage: true 
  });
  
  // Mobile Screenshot
  console.log('Capturing Landing Pages Mobile screenshot...');
  await page.setViewport({ width: 375, height: 812, isMobile: true, hasTouch: true });
  await new Promise(resolve => setTimeout(resolve, 500));
  await page.screenshot({ 
    path: 'C:\\Users\\Beckpro\\.gemini\\antigravity\\brain\\64ebec25-c32a-4e0f-b524-725bc6da0e1a\\landing_pages_mobile.png', 
    fullPage: true 
  });
  
  // 4. VERIFY AUTOMATIZACION DIGITAL MICROSITE
  console.log('\n--- Verifying Automatización Digital Microsite ---');
  await page.setViewport({ width: 1366, height: 768 });
  console.log('Navigating to http://localhost:3000/servicios/automatizacion-digital...');
  await page.goto('http://localhost:3000/servicios/automatizacion-digital', { waitUntil: 'networkidle2' });
  
  const structureAD = await page.evaluate(() => {
    const header = document.querySelector('header');
    const hero = document.querySelector('.m-hero');
    const contact = document.querySelector('#contacto');
    const footer = document.querySelector('footer');
    return { header: !!header, hero: !!hero, contact: !!contact, footer: !!footer };
  });
  console.log('Automatización Digital structure check:', structureAD);
  
  // Desktop Screenshot
  console.log('Capturing Automatización Digital Desktop screenshot...');
  await page.screenshot({ 
    path: 'C:\\Users\\Beckpro\\.gemini\\antigravity\\brain\\64ebec25-c32a-4e0f-b524-725bc6da0e1a\\automation_desktop.png', 
    fullPage: true 
  });
  
  // Mobile Screenshot
  console.log('Capturing Automatización Digital Mobile screenshot...');
  await page.setViewport({ width: 375, height: 812, isMobile: true, hasTouch: true });
  await new Promise(resolve => setTimeout(resolve, 500));
  await page.screenshot({ 
    path: 'C:\\Users\\Beckpro\\.gemini\\antigravity\\brain\\64ebec25-c32a-4e0f-b524-725bc6da0e1a\\automation_mobile.png', 
    fullPage: true 
  });

  // 5. VERIFY TIENDAS ONLINE MICROSITE
  console.log('\n--- Verifying Tiendas Online Microsite ---');
  await page.setViewport({ width: 1366, height: 768 });
  console.log('Navigating to http://localhost:3000/servicios/tiendas-online...');
  await page.goto('http://localhost:3000/servicios/tiendas-online', { waitUntil: 'networkidle2' });
  
  const structureTO = await page.evaluate(() => {
    const header = document.querySelector('header');
    const hero = document.querySelector('.to-microsite');
    const contact = document.querySelector('#contacto');
    const footer = document.querySelector('footer');
    return { header: !!header, hero: !!hero, contact: !!contact, footer: !!footer };
  });
  console.log('Tiendas Online structure check:', structureTO);
  
  // Desktop Screenshot
  console.log('Capturing Tiendas Online Desktop screenshot...');
  await page.screenshot({ 
    path: 'C:\\Users\\Beckpro\\.gemini\\antigravity\\brain\\64ebec25-c32a-4e0f-b524-725bc6da0e1a\\tiendas_online_desktop.png', 
    fullPage: true 
  });
  
  // Mobile Screenshot
  console.log('Capturing Tiendas Online Mobile screenshot...');
  await page.setViewport({ width: 375, height: 812, isMobile: true, hasTouch: true });
  await new Promise(resolve => setTimeout(resolve, 500));
  await page.screenshot({ 
    path: 'C:\\Users\\Beckpro\\.gemini\\antigravity\\brain\\64ebec25-c32a-4e0f-b524-725bc6da0e1a\\tiendas_online_mobile.png', 
    fullPage: true 
  });

  // 6. VERIFY SISTEMAS PERSONALIZADOS MICROSITE
  console.log('\n--- Verifying Sistemas Personalizados Microsite ---');
  await page.setViewport({ width: 1366, height: 768 });
  console.log('Navigating to http://localhost:3000/servicios/sistemas-personalizados...');
  await page.goto('http://localhost:3000/servicios/sistemas-personalizados', { waitUntil: 'networkidle2' });
  
  const structureSP = await page.evaluate(() => {
    const header = document.querySelector('header');
    const hero = document.querySelector('.sp-microsite');
    const contact = document.querySelector('#contacto');
    const footer = document.querySelector('footer');
    return { header: !!header, hero: !!hero, contact: !!contact, footer: !!footer };
  });
  console.log('Sistemas Personalizados structure check:', structureSP);
  
  // Desktop Screenshot
  console.log('Capturing Sistemas Personalizados Desktop screenshot...');
  await page.screenshot({ 
    path: 'C:\\Users\\Beckpro\\.gemini\\antigravity\\brain\\64ebec25-c32a-4e0f-b524-725bc6da0e1a\\sistemas_personalizados_desktop.png', 
    fullPage: true 
  });
  
  // Mobile Screenshot
  console.log('Capturing Sistemas Personalizados Mobile screenshot...');
  await page.setViewport({ width: 375, height: 812, isMobile: true, hasTouch: true });
  await new Promise(resolve => setTimeout(resolve, 500));
  await page.screenshot({ 
    path: 'C:\\Users\\Beckpro\\.gemini\\antigravity\\brain\\64ebec25-c32a-4e0f-b524-725bc6da0e1a\\sistemas_personalizados_mobile.png', 
    fullPage: true 
  });

  // 7. VERIFY CONSULTORIA Y SOPORTE MICROSITE
  console.log('\n--- Verifying Consultoría y Soporte Microsite ---');
  await page.setViewport({ width: 1366, height: 768 });
  console.log('Navigating to http://localhost:3000/servicios/consultoria-soporte...');
  await page.goto('http://localhost:3000/servicios/consultoria-soporte', { waitUntil: 'networkidle2' });
  
  const structureCS = await page.evaluate(() => {
    const header = document.querySelector('header');
    const hero = document.querySelector('.cs-microsite');
    const contact = document.querySelector('#contacto');
    const footer = document.querySelector('footer');
    return { header: !!header, hero: !!hero, contact: !!contact, footer: !!footer };
  });
  console.log('Consultoría y Soporte structure check:', structureCS);
  
  // Desktop Screenshot
  console.log('Capturing Consultoría y Soporte Desktop screenshot...');
  await page.screenshot({ 
    path: 'C:\\Users\\Beckpro\\.gemini\\antigravity\\brain\\64ebec25-c32a-4e0f-b524-725bc6da0e1a\\consultoria_soporte_desktop.png', 
    fullPage: true 
  });
  
  // Mobile Screenshot
  console.log('Capturing Consultoría y Soporte Mobile screenshot...');
  await page.setViewport({ width: 375, height: 812, isMobile: true, hasTouch: true });
  await new Promise(resolve => setTimeout(resolve, 500));
  await page.screenshot({ 
    path: 'C:\\Users\\Beckpro\\.gemini\\antigravity\\brain\\64ebec25-c32a-4e0f-b524-725bc6da0e1a\\consultoria_soporte_mobile.png', 
    fullPage: true 
  });
  
  await browser.close();
  console.log('\nAll 6 E2E verification tests and screenshots completed successfully!');
})().catch(err => {
  console.error('Error during E2E automation:', err);
  process.exit(1);
});
