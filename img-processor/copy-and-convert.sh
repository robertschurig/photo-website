magick --version

array=(color-gel nudes portraits white-blur)

rm -rf "images-out"

for folderName in "${array[@]}"; do
    echo "processing: $folderName"
    mkdir -p "images-out/$folderName"

    for image in images/$folderName/*.jpg; do
        magick $image \
            -sampling-factor 4:2:0 \
            -strip \
            -quality 80 \
            -interlace JPEG \
            -colorspace sRGB \
            "images-out/$folderName/$(basename "$image")"

        magick "images-out/$folderName/$(basename "$image")" \
            -resize 500x700\> \
            -gaussian-blur 0.05 \
            "images-out/$folderName/$(basename "$image" | sed 's/\(.*\)\..*/\1/')"_thumb.jpg

        magick $image \
            -define heic:speed=2 \
            "images-out/$folderName/$(basename "$image" | sed 's/\(.*\)\..*/\1/')".avif

        magick "images-out/$folderName/$(basename "$image" | sed 's/\(.*\)\..*/\1/')".avif \
            -resize 500x700\> \
            "images-out/$folderName/$(basename "$image" | sed 's/\(.*\)\..*/\1/')"_thumb.avif
    done

done
