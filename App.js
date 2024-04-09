//import logo from './logo.svg';
import './App.css';
import Function_Quang from './components/Function_Quang';
import Function_tran from './components/Function_tran';

function App() {
  return (
    <div className="App">
    <section className="section">
      <h1>Xin chào mọi người</h1>
      <p>Tôi tên là Tiến.</p>
      <p>Hôm nay tôi sẽ giới thiệu về trường của tôi.</p>
      <h2>Giới thiệu chung về Đại học Nguyễn Trãi</h2>
      <p>Thông tin cơ bản:</p>
      <ul>
        <li>Tên trường: Đại học Nguyễn Trãi</li>
        <li>Tên tiếng Anh: Nguyen Trai University (NTU)</li>
        <li>Mã trường: NTU</li>
        <li>Loại trường: Dân lập</li>
        <li>Hệ đào tạo: Đại học – Cao đẳng – Sau đại học</li>
      </ul>
      <h2>Địa chỉ các cơ sở</h2>
      <ul>
        <li>Cơ sở 1: 266 Đội Cấn, Ba Đình, Hà Nội</li>
        <li>Cơ sở 2: 36A Phạm Văn Đồng, Bắc Từ Liêm, Hà Nội</li>
        <li>Cơ sở 3: Số 28A Lê Trọng Tấn, Hà Đông, Hà Nội</li>
      </ul>
      <p>SĐT: 0243.7481.830 – ‭098 192 26 41</p>
      <p>Email: daihocnguyentrai.edu.vn@gmail.com – tuyensinh@ntu-hn.edu.vn</p>
      <p>Website: <a href="http://daihocnguyentrai.edu.vn/">http://daihocnguyentrai.edu.vn/</a></p>
      <p>Facebook: <a href="https://www.facebook.com/daihocnguyentrai.edu.vn">www.facebook.com/daihocnguyentrai.edu.vn</a></p>
      <img src="demo/src/dai-hoc-nguyen-trai-1.jpg" alt="ảnh" />

      <h1>demo jsx</h1>
      <Function_tran/>
      <Function_tran fullname="Tran quang Tien" age="10"/>



      <Function_Quang info="hoc rj" time="10"/>
    </section>
    </div>
  );
}

export default App;
