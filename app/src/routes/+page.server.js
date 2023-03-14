import { redirect } from "@sveltejs/kit"
import { nanoid } from "nanoid/async"
import { getShortLink } from "$lib/utils"

export const load = async ({ locals }) => {
  if (!locals.user) {
    throw redirect(303, "/auth/login")
  }

  const top10Links = await locals.pb.collection("links").getFullList(10, {
    sort: "-clicks",
    filter: `createdBy="${locals.user?.id}"`,
  })

  return {
    top10Links: structuredClone(top10Links),
  }
}

export const actions = {
  createShortLink: async ({ locals, request }) => {
    const data = await request.formData()

    try {
      const url = data.get("url")
      const shortSlug = await nanoid(8)

      await locals.pb.collection("links").create({
        url,
        shortSlug,
        createdBy: locals.user?.id,
      })

      return {
        shortLink: getShortLink(shortSlug),
        url,
      }
    } catch (e) {
      console.log(e)
      return fail(e.status, { error: e.message })
    }
  },
}
