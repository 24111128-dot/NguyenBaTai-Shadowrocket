# Kết quả kiểm tra AI Filter — 13/11/2026

**Chưa xác nhận có config nào tạo ảnh AI thật trong Locket PTB.**

- Bản gốc `17in1public.conf` và bản `locket-ai.conf` của repository đều đã được người dùng báo lỗi “Không thể áp dụng bộ lọc”.
- Script `photoboth.js` từ `andanh447/locketgold_tool` bị làm rối mã; không xác nhận được backend/model.
- Một nguồn thay thế: [Xwuan19/locket-gold-hub](https://github.com/Xwuan19/locket-gold-hub). Script `shadowrocket/js/locket_pb_req.js` có `buildMock200Response(outputUrl)`, trả HTTP 200 và trỏ `outputUrl` đến URL ảnh đầu vào. **Đây không phải bằng chứng tạo ảnh AI.** Không tích hợp script này vào cấu hình chính.
- Locket xác nhận dùng Nano Banana 2 Lite cho Locket Looks: https://cloud.google.com/customers/locket
- Shadowrocket config không tạo model AI, không tự cấp quyền Gold/Premium và không cung cấp khóa dịch vụ AI.

## Trạng thái repository
- `locket-ai.conf`: bản thử nghiệm có chuyển hướng ảnh đến Cloudflare Worker không được xác minh. **Cẩn trọng với ảnh riêng tư.**
- `locket-ai-debug.conf`: bản thử nghiệm bổ sung logging trạng thái HTTP.
- Không coi các file trên là cấu hình đã xác thực hoạt động trên iPhone.

## Chẩn đoán chính xác
1. Test Locket bản App Store **không bật Shadowrocket** với tài khoản được cấp quyền dùng AI Filter, nếu có.
2. Nếu không chạy cả trên app chính thức: kiểm tra mạng, tài khoản, quyền truy cập và liên hệ Locket.
3. Nếu chỉ lỗi qua Shadowrocket: phân tích status, endpoint, redirects, lỗi TLS và script.
4. Không đưa ảnh/tokens qua các máy chủ không tin cậy; không nhập chứng chỉ CA của người khác.

## Lưu ý
Các nguồn quảng cáo “AI Filter 100%” chưa được xác minh bằng ảnh đầu ra thực tế. Không thể chứng thực từ README hoặc phản hồi HTTP 200 giả lập.
