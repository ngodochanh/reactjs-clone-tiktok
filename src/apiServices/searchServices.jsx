import * as request from '~/utils/request';

export const searchUser = async (q, type = 'less') => {
  try {
    // encodeURIComponent: Khi truyền dữ liệu gây hiểu nhầm cho url thì sẽ mã hóa để thành ký tự hợp lệ
    const { data } = await request.get(`/users/search?q=${encodeURIComponent(q)}&type=${type}`);
    return data;
  } catch (error) {
    console.log(error);
  }
};
