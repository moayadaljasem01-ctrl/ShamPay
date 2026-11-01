'use strict';
(() => {
  const $ = id => document.getElementById(id);
  const show = id => ['setup','login','denied','dashboard'].forEach(name => { $(name).hidden = name !== id; });
  const msg = text => { $('message').textContent = text || ''; };
  const cfg = window.SHAMPAY_ADMIN_CONFIG || {};
  if (!cfg.url || !/^https:\/\/[a-z0-9-]+\.supabase\.co$/.test(cfg.url) || !cfg.publishableKey || cfg.publishableKey.startsWith('PASTE_') || !window.supabase) {
    show('setup'); msg(!window.supabase ? 'تعذر تحميل مكتبة Supabase. تحقق من الاتصال بالإنترنت.' : 'ملف إعداد الاتصال غير مكتمل.'); return;
  }
  const client = window.supabase.createClient(cfg.url, cfg.publishableKey, {
    auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: false }
  });
  let checking = false;
  async function refresh() {
    if (checking) return;
    checking = true;
    try {
      const { data: { user }, error: userError } = await client.auth.getUser();
      if (userError || !user) { show('login'); return; }
      // The SQL RPC uses auth.uid() server-side and only returns a boolean.
      const { data: allowed, error } = await client.rpc('shampay_admin_can_manage');
      if (error) { show('denied'); msg('تعذر التحقق من الصلاحيات: ' + error.message); return; }
      if (allowed !== true) { show('denied'); msg('هذا الحساب لا يملك صلاحية admin.manage.'); return; }
      $('signedInAs').textContent = 'الحساب: ' + (user.email || 'مستخدم مصادق عليه');
      show('dashboard'); msg('');
    } catch (err) { show('login'); msg('تعذر الاتصال بالخادم. حاول مجدداً.'); }
    finally { checking = false; }
  }
  $('loginForm').addEventListener('submit', async event => {
    event.preventDefault(); msg('');
    const button = $('loginButton'); button.disabled = true; button.textContent = 'جارٍ التحقق…';
    try {
      const { error } = await client.auth.signInWithPassword({email:$('email').value.trim(),password:$('password').value});
      $('password').value = '';
      if (error) { msg('فشل تسجيل الدخول: تأكد من البريد وكلمة المرور.'); return; }
      await refresh();
    } catch { msg('تعذر الاتصال بـ Supabase.'); }
    finally { button.disabled = false; button.textContent = 'تسجيل الدخول'; }
  });
  async function logout() { await client.auth.signOut(); show('login'); msg('تم تسجيل الخروج.'); }
  $('logout').addEventListener('click',logout);
  $('deniedLogout').addEventListener('click',logout);
  client.auth.onAuthStateChange(event => { if (event === 'SIGNED_OUT') { show('login'); msg(''); } });
  refresh();
})();
