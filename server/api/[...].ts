import { joinURL } from 'ufo'

export default defineEventHandler(async (event) => {
  // Get the runtimeconfig proxy url
  const proxyUrl = useRuntimeConfig().myProxyUrl
  // check the path
  const path = event.path.replace(/^\/api\//, '') // /api/users -> users
  const target = joinURL(proxyUrl, path)
  
  // proxy it!
  return proxyRequest(event, target)
})