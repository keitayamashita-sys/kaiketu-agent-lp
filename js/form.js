(function () {
  // =============================================
  // EmailJS設定 - 以下の値を自身のものに差し替えてください
  // =============================================
  var PUBLIC_KEY = 'EP-hfSXZ05nhzr9ZJ';
  var SERVICE_ID = 'service_vnyk47y';
  var TEMPLATE_ID = 'template_2usi9x6';
  // =============================================

  emailjs.init(PUBLIC_KEY);

  document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var btn = form.querySelector('.p-form__btn');
      btn.disabled = true;
      btn.textContent = '送信中...';

      var urlParams = new URLSearchParams(window.location.search);

      var params = {
        challenge: form.challenge.value,
        interest: form.interest.value,
        company: form.company.value,
        name: form.elements.namedItem('name').value,
        email: form.email.value,
        phone: form.phone.value,
        page_url: window.location.href,
        referrer: document.referrer || '(direct)',
        utm_source: urlParams.get('utm_source') || '',
        utm_medium: urlParams.get('utm_medium') || '',
        utm_campaign: urlParams.get('utm_campaign') || ''
      };

      emailjs.send(SERVICE_ID, TEMPLATE_ID, params)
        .then(function () {
          window.location.href = './thanks.html';
        })
        .catch(function (error) {
          alert('送信に失敗しました。時間をおいて再度お試しください。');
          console.error('EmailJS Error:', error);
          btn.disabled = false;
          btn.textContent = '送信する';
        });
    });
  });
})();
