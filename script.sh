FILES=$(find components -type f)

for FILE in $FILES
do
  old_name=$(echo "${FILE}" | sed -e 's/\([A-Z]\)/-\1/g' -e 's/\/-/\//' | tr '[:upper:]' '[:lower:]')

  git mv -f "${old_name}" "${FILE}" || mv -f "${old_name}" "${FILE}"
done
