DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
APP_PATH=$DIR/..

OPENAPI_YAML_PATH=$APP_PATH/openapi
OPENAPI_GENERATED_TS_PATH=$APP_PATH/src/types/generated

SRC_FILES=(
    "legacy/ojp-v1/ojp-lir-request.yml"
    "legacy/ojp-v1/ojp-lir-response.yml"
    
    "legacy/ojp-v1/ojp-ser-request.yml"
    "legacy/ojp-v1/ojp-ser-response.yml"
    
    "legacy/ojp-v1/ojp-shared.yml"
    "legacy/ojp-v1/ojp-tir-response.yml"
    "legacy/ojp-v1/ojp-trip.yml"

    "ojp-shared.yml"

    "ojp-fare-request.yml"
    "ojp-fare-response.yml"
    
    "ojp-lir-request.yml"
    "ojp-lir-response.yml"
    
    "ojp-ser-request.yml"
    "ojp-ser-response.yml"

    "ojp-tir-request.yml"
    "ojp-tir-response.yml"
    
    "ojp-tr-request.yml"
    "ojp-tr-response.yml"
    
    "ojp-trr-request.yml"
    "ojp-trr-response.yml"
)

for file in "${SRC_FILES[@]}"; do
    filename="${file%.*}"
    src_path=$OPENAPI_YAML_PATH/$file
    bundle_src_path=$OPENAPI_YAML_PATH/$filename.gen.bundle.yaml
    dst_path=$OPENAPI_GENERATED_TS_PATH/$filename.ts

    # 1. merge the YAML files into one
    npx --prefix $APP_PATH \
        swagger-cli bundle $src_path \
        -o $bundle_src_path \
        --dereference \
        --type=yaml

    # 2. convert to TS
    npx --prefix $APP_PATH \
        openapi-typescript $bundle_src_path \
        -o $dst_path

    # 3. cleanup
    rm -f $bundle_src_path
    
    # Log the results
    echo "$file exported to $dst_path"
    echo ""
done
