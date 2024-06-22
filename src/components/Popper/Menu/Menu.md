# Cách tạo Menu nhiều cấp nâng cao

1. Đầu vào và [State]

- [menuList]: Mảng chứa các menu cấp 1 (menu gốc).
- [menuStack]:

* Một stack để lưu trữ các menu đang được duyệt.
* Mỗi phần tử trong stack là một đối tượng có dạng { data: [] }, trong đó data là mảng menu cấp hiện tại.

2. Biến currentMenu

- Biến này sẽ là giá trị cuối cùng trong menuStack, đại diện cho menu mà bạn muốn hiển thị hiện tại trên giao diện.

3. Điều hướng giữa các menu

- Khi người dùng nhấn vào một menu để chuyển sang menu cấp tiếp theo

* Thêm menu cấp tiếp theo vào menuStack. Đảm bảo rằng menu này có thuộc tính children.data là một mảng (nếu có menu con)

4. Quay lại menu trước

- Nếu người dùng muốn quay lại menu trước đó

* Xóa menu cuối cùng khỏi menuStack để hiển thị menu trước đó.

5. Hiển thị menu trên giao diện

- Sử dụng currentMenu để render ra các menu theo cấu trúc và dữ liệu của data hiện tại trong menuStack.

## Lưu ý:

Trong menu con (children) phải có key là data, value là mảng (để hiển thị), để cùng kiểu là {data: []}
[children] là obj, trong [children] có data: [] và các thông tin hiển thị hay custom khác
