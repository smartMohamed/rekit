export function fireOnClickOutside ($event, ref, cb) {
  const elt = this.refs[ref]
  if (!elt) return
  if(!elt.contains($event.target)) cb($event)
}