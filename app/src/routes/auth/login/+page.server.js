import { redirect, fail } from "@sveltejs/kit"

export const actions = {
  login: async ({ locals, request }) => {
    const data = await request.formData()

    try {
      const user = await locals.pb
        .collection("users")
        .authWithPassword(data.get("email"), data.get("password"))

      if (!user.record.verified) {
        locals.pb.authStore.clear()
        return fail(400, { error: "Please verify your email before login" })
      }
    } catch (e) {
      console.log(e)
      return fail(e.status, { error: e.message })
    }
    throw redirect(303, "/")
  },

  resetPassword: async ({ locals, request }) => {
    const data = await request.formData()

    try {
      await locals.pb
        .collection("users")
        .requestPasswordReset(data.get("email"))
    } catch (e) {
      console.log(e)
      return fail(e.status, { error: e.message })
    }

    return {
      success: "Password reset link sent!",
    }
  },
}
