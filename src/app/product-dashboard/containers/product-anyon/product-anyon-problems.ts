export interface Problem {
  id: number;
  title: string,
  target: string,
}

export const PROBLEMS: Problem[] =
[
  {
    id: 1,
    title: "TÀI LIỆU KHÔNG ĐỒNG BỘ, DẪN ĐẾN SAI SÓT",
    target: "Phòng thiết kế",
  },
  {
    id: 2,
    title: "KHÔNG CÓ NƠI LƯU TRỮ CÁC FAMILY DÙNG TRONG THIẾT KẾ",
    target: "Kỹ sư thiết kế",
  },
  {
    id: 3,
    title: "VIỆC PHÂN QUYỀN SỬ DỤNG, CHIA SẺ TÀI LIỆU CÒN RỜI RẠC",
    target: "Phòng quản lý dự án",
  },
  {
    id: 4,
    title: "NGƯỜI QUẢN LÝ KHÓ CÓ CÁI NHÌN KHÁI QUAN VỀ CÁC DỰ ÁN",
    target: "Phòng quản lý dự án",
  },
  {
    id: 5,
    title: "DỮ LIỆU BỊ MẤT, SAO CHÉP, KHÓ KIỂM SOÁT",
    target: "Phòng IT",
  },
  {
    id: 6,
    title: "MỖI ĐỊNH DẠNG ĐUÔI BẢN VẼ PHẢI CÀI PHẦN MỀM ĐẮT TIỀN",
    target: "Tư vấn giám sát",
  },
] 