# copypasted, not quaranteed to be enough
npm in prisma --save-dev
npm i @prisma/client@latest
npx prisma init --datasourceprovider sqlite

# create ./prisma/schema.prisma
npx prisma migrate dev

echo "Remember to .gitignore the created ./.env file."