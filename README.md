# limdim.softie

Website tĩnh (HTML + CSS + JS) với Decap CMS để quản lý danh mục và sản phẩm.

```
index.html              trang web
css/style.css           giao diện
js/app.js               code trang web, đọc dữ liệu từ content/*.json
content/categories.json danh mục  (do CMS tạo/sửa)
content/products.json   sản phẩm  (do CMS tạo/sửa)
images/uploads/         ảnh sản phẩm (CMS tải ảnh lên đây)
images/site/            ảnh cố định: logo, booklet, feedback...
admin/index.html        trang quản lý  ->  https://tên-site.netlify.app/admin/
admin/config.yml        cấu hình CMS
netlify.toml            cấu hình Netlify
```

## Đưa lên GitHub và Netlify

1. Tạo repo mới trên GitHub, giải nén file zip rồi đẩy toàn bộ nội dung lên nhánh `main`.
2. Mở `admin/config.yml`, đổi dòng `repo:` thành `ten-github/ten-repo` của bạn (và `site_url`, `display_url` thành địa chỉ web thật).
3. Netlify: **Add new site → Import an existing project** → chọn repo. Để trống Build command, đặt Publish directory là `.` rồi Deploy.
4. Cho phép đăng nhập vào `/admin` bằng GitHub:
   - GitHub: Settings → Developer settings → OAuth Apps → New OAuth App. Homepage URL là địa chỉ web của bạn, Authorization callback URL là `https://api.netlify.com/auth/done`. Lấy Client ID và tạo Client Secret.
   - Netlify: Site configuration → Access & security → OAuth → Install provider → GitHub, dán Client ID và Client Secret.
5. Mở `https://tên-site.netlify.app/admin/` và bấm **Login with GitHub**. Tài khoản đăng nhập phải có quyền ghi (write) vào repo. Muốn thêm người quản lý, mời họ làm Collaborator của repo.

Mỗi lần bấm **Publish** trong CMS, nội dung được commit lên GitHub và Netlify tự deploy lại, thường mất khoảng 1 phút.

## Cách dùng CMS

- **Sản phẩm:** sửa tên, giá, ảnh, tag (Best seller / Hết hàng), phân loại (Size, Màu sắc hoặc tự đặt tên). Kéo thả để đổi thứ tự.
- **Giá** tính bằng nghìn đồng (nhập `350` là 350.000đ). Sản phẩm có phân loại thì nhập giá riêng cho từng lựa chọn, web sẽ tự hiện khoảng giá. Để trống hết giá thì web hiện "Nhắn shop báo giá".
- **Danh mục:** thêm, đổi tên, đổi thứ tự. Mỗi danh mục có một *Mã danh mục* (không dấu, không khoảng trắng) và không nên đổi sau khi đã có sản phẩm. Mã `C` là danh mục Túi cói: mục Product Catalog và Booklet bảo quản cói nằm ngay dưới danh mục này.
- Ảnh sản phẩm: ảnh dọc tỉ lệ 4:5, JPG dưới 500KB để trang tải nhanh.

## Chạy thử trên máy

```
npx decap-server        # cửa sổ 1: máy chủ CMS cục bộ
npx serve .             # cửa sổ 2: mở địa chỉ nó in ra, thêm /admin/
```
Trên localhost, CMS ghi thẳng vào file trong thư mục, không cần đăng nhập. Không mở `index.html` bằng cách bấm đúp, vì trình duyệt sẽ chặn việc đọc `content/*.json`.
