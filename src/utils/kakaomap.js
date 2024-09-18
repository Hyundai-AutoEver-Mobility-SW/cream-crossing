const { kakao } = window;

const stores = [
  { name: '고양점', address: '고양시 덕양구 권율대로 420', lat: 37.6585, lng: 126.8314 },
  { name: '광명점', address: '광명시 일직로 17', lat: 37.418, lng: 126.8868 },
  { name: '기흥점', address: '용인시 기흥구 신고매로 62', lat: 37.2694, lng: 127.1191 },
  { name: '동부산점', address: '부산광역시 기장군 기장읍 동부산관광3로 17', lat: 35.2437, lng: 129.2227 },
];

export const calculateDistance = searchedLocation => {
  if (!kakao) {
    console.error('Kakao map SDK is not loaded');
    return [];
  }
  return stores
    .map(store => {
      const start = new kakao.maps.LatLng(searchedLocation.lat, searchedLocation.lng);
      const destination = new kakao.maps.LatLng(store.lat, store.lng);
      const distance = getDistance(start, destination);
      return { ...store, distance: distance.toFixed(2) };
    })
    .sort((a, b) => a.distance - b.distance);
};

const getDistance = (start, destination) => {
  const R = 6371; // 지구 반지름 (킬로미터)
  const [lat1, lng1, lat2, lng2] = [start.getLat(), start.getLng(), destination.getLat(), destination.getLng()];
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLng = (lng2 - lng1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};
