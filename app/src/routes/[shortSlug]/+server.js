import { redirect } from "@sveltejs/kit"

export const GET = async ({ locals, params }) => {
  let link
  try {
    link = await locals.pb
      .collection("links")
      .getFirstListItem(`shortSlug="${params.shortSlug}"`)

    await locals.pb.collection("links").update(link.id, {
      clicks: link.clicks + 1,
    })
  } catch (e) {
    console.log(e)
  }

  if (link?.url) throw redirect(303, link?.url)
  throw redirect(303, "/")
}
