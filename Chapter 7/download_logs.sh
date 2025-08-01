curl --user "{public_key:private_key}" \
     --digest \
     --header "Accept: application/gzip" \
     GET "https: //cloud.mongodb.com/api/atlas/v2/groups/{groupId}/clusters/{hostname}/logs/{logName}.gz"
