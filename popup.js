document.addEventListener('DOMContentLoaded', function() {
  const iframe = document.getElementById('ploudFrame');
  const loading = document.getElementById('loading');
  
  // Show iframe and hide loading when iframe is loaded
  iframe.addEventListener('load', function() {
    loading.style.display = 'none';
    iframe.style.display = 'block';
    
    // Adjust iframe content if needed
    try {
      // Try to access iframe content - this may fail due to same-origin policy
      // if the iframe is from a different domain
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      const iframeBody = iframeDoc.body;
      
      // Apply additional styles if needed
      if (iframeBody) {
        iframeBody.style.zoom = "0.9";
        
        // Try to hide scrollbars but keep scrolling functionality
        const styleElement = iframeDoc.createElement('style');
        styleElement.textContent = `
          ::-webkit-scrollbar {
            width: 0px;
            background: transparent;
            display: none;
          }
          * {
            scrollbar-width: none;
            -ms-overflow-style: none;
          }
        `;
        iframeDoc.head.appendChild(styleElement);
      }
    } catch (e) {
      // Cannot access iframe content due to same-origin policy
      console.log("Cannot modify iframe content due to same-origin policy");
    }
  });
  
  // Handle any errors
  iframe.addEventListener('error', function() {
    loading.innerHTML = 'خطا در بارگذاری سایت. لطفاً اتصال اینترنت خود را بررسی کنید.';
  });
});
