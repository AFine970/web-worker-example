# 使用官方的 Nginx 镜像作为基础镜像  
FROM nginx:stable-alpine  
  
# 将 Vue Web App 的打包产物复制到 Nginx 的默认站点目录下  
COPY dist/ /usr/share/nginx/html/  
  
# 暴露 Nginx 的默认端口  
EXPOSE 3000  
  
# 启动 Nginx  
CMD ["nginx", "-g", "daemon off;"]