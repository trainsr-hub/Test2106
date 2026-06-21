// src/App.tsx
import Display from './components/Display';

export default function App() {
  return (
    <main style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>Ứng dụng React của tôi</h1>
      {/* App.tsx chỉ gọi Display và không can thiệp vào event bên trong */}
      <Display />
    </main>
  );
}