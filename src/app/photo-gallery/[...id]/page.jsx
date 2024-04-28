import photos from "@/lib/photo-gallery/photos.json";
import PhotoGroup from "@/components/PhotoGroup";
import PhotosEntry from "@/components/Photos";

export const metadata = {
    title: "Photo Gallery | [WHSO]", description: "Photo Gallery"

}

export function generateStaticParams() {
    let toReturn = [];
    for (const set in photos) {
        toReturn.push({id: [set]});
        for (const elem of photos[set].photos) {
            toReturn.push({id: [set, elem["id"]]});
        }
    }
    return toReturn;
}

export default function Photos({params}) {
    const {id} = params;
    if (id.length === 1) {
        metadata.title = `${photos[id[0]].title} | [WHSO] Photo Gallery`;
        metadata.description = photos[id[0]].description;
        return <PhotoGroup group={id[0]}/>
    } else {
        return <PhotosEntry section={id[0]} id={id[1]}/>
    }
}