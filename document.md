# Route
- Các loại route:
    - api: route/api
        - Prefix: `api`
    - backend: route/backend
        - Prefix: `admin`
- VD đăng kí route api:
```
router.get('/test1', (req, res) => {
    http.user.test1(req, res);
});
```
- Tham số:
    - /test1: tương ứng với đường dẫn localhost:3000/api/test1
    - http.user.test1(req, res) là controller[`Controller`] xử lý tương ứng với route
    
# Controller
- Các loại controller:
    - api: app/api
    - backend: app/backend
    
# Middleware
- Path: route/middleware

# Model
- Path: model/mysql

# Config
- Type: global
- File config đọc theo biến APP_ENV (folder local và production)
- Copy folder local trong thư mục `config` và copy toàn bộ các file trong folder production sang local
- Tạo file config:
    - Tạo file thư mục local hoặc production
    - Quy tắc: Đặt tên `key` trùng với tên file trong `Object` được export
- Đọc key config:
    CONFIG.[file_name].[key]