export function getSlug(item) {
    return item.replace(/ /g, "-").replace(/\./g, "").toLowerCase()
}
