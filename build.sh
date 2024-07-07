npm run build
docker build -t frontend .
docker run -d -p 3000:80 frontend
