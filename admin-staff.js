
// ShamPay Admin — Staff & Roles (read-only)
// Uses the existing Supabase authenticated session.

window.ShamPayStaff = Object.freeze({
  async load() {
    const config = window.SHAMPAY_ADMIN_CONFIG;

    if (!config?.url || !config?.publishableKey) {
      throw new Error('إعدادات Supabase غير مكتملة');
    }

    if (!window.supabase?.createClient) {
      throw new Error('مكتبة Supabase غير محمّلة');
    }

    const client = window.supabase.createClient(
      config.url,
      config.publishableKey,
      {
        auth: {
          persistSession: true,
          autoRefreshToken: true,
          detectSessionInUrl: false
        }
      }
    );

    const { data: { user }, error: authError } =
      await client.auth.getUser();

    if (authError || !user) {
      throw new Error('يرجى تسجيل دخول الإدارة أولاً');
    }

    const { data, error } = await client.rpc(
      'shampay_admin_staff_overview'
    );

    if (error) {
      throw new Error(
        'تعذّر تحميل الموظفين والصلاحيات: ' + error.message
      );
    }

    return {
      roles: Array.isArray(data?.roles) ? data.roles : [],
      staff: Array.isArray(data?.staff) ? data.staff : []
    };
  }
});
