export function routeInterception( location ){
  if( location.pathname === '/foo' ){
    return '/tabs'
  }

  return location;
}