window.addEventListener("load", function() {
  window.cookieconsent.initialise({
    palette: {
      popup: { background: "#2c3e50", text: "#ffffff" },
      button: { background: "#ffb703", text: "#000000" }
    },
    theme: "classic",
    content: {
      message: "🍪 We use cookies to improve your experience and collect anonymous usage statistics with Google Analytics.",
      dismiss: "Accept",
      deny: "Decline",
      link: "Learn more",
      href: "/cookies/"
    },
    type: "opt-in", // 👈 Esto activa el modo consentimiento previo
    onInitialise: function (status) {
      if (status == cookieconsent.status.allow) {
        enableAnalytics();
      }
    },
    onStatusChange: function(status) {
      if (status == cookieconsent.status.allow) {
        enableAnalytics();
      }
    }
  })
});

function enableAnalytics() {
  // Aquí insertamos el snippet de Google Analytics dinámicamente
  var script1 = document.createElement("script");
  script1.src = "https://www.googletagmanager.com/gtag/js?id=G-8RN12JNR89";
  script1.async = true;
  document.head.appendChild(script1);

  var script2 = document.createElement("script");
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-8RN12JNR89');
  `;
  document.head.appendChild(script2);
}
