import request from '../utils/request';

export function query() {
  return request('/api/users');
}

export function search({ id }) {
  console.log('id', id);
  return request(`https://openapi.duoxieyun.com/v2/duoxieyun/goaccp/device/data/report/short/${id}`);
}
