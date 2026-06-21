// src/components/Display.tsx
import { useState } from 'react';
import '../packages/theme/Midnight Blue/theme.css';

// Khai báo thêm thuộc tính shortName để vừa với nút kích thước nhỏ
interface TabItem {
  id: string;
  shortName: string;
  title: string;
  content: string;
}

export default function Display() {
  const mockTabs: TabItem[] = [
    { id: 'main', shortName: 'MN', title: 'Tổng quan (MAIN)', content: 'Đây là giao diện của trang Tổng Quan.' },
    { id: 'shop', shortName: 'SH', title: 'Cửa hàng (SHOP)', content: 'Khu vực hiển thị tính năng trao đổi và tài nguyên.' },
    { id: 'inventory', shortName: 'IV', title: 'Kho đồ (INVENTORY)', content: 'Danh sách vật phẩm và cấu trúc tiêu hao.' },
  ];

  const [activeTab, setActiveTab] = useState<string>(mockTabs[0].id);
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  const currentTabContent = mockTabs.find(tab => tab.id === activeTab)?.content || '';

  return (
    // [ĐÃ SỬA]: Thay thế Flexbox bằng Grid, áp dụng gridTemplateColumns: "80px 1fr" và font monospace
    <div style={{
      display: 'grid',
      gridTemplateColumns: '80px 1fr',
      minHeight: '100vh',
      backgroundColor: 'var(--theme-bg-main)',
      color: 'var(--theme-text-main)',
      fontFamily: 'monospace' 
    }}>
      
      {/* THANH CHUYỂN TAB DỌC (VERTICAL TAB BAR) */}
      {/* [ĐÃ SỬA]: Điều chỉnh padding thành "30px 0" và gap: "20px" theo nguyên bản GameLayout */}
      <nav style={{
        backgroundColor: 'var(--theme-bg-surface)',
        borderRight: '1px solid var(--theme-border)',
        padding: '30px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '20px'
      }}>
        {mockTabs.map((tab) => {
          const isActive = activeTab === tab.id;
          const isHovered = hoveredTab === tab.id;

          let itemBgColor = 'transparent';
          if (isActive) {
            itemBgColor = 'var(--theme-bg-active)';
          } else if (isHovered) {
            itemBgColor = 'var(--theme-bg-hover)';
          }

          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              onMouseEnter={() => setHoveredTab(tab.id)}
              onMouseLeave={() => setHoveredTab(null)}
              title={tab.title} // Hiển thị tên đầy đủ khi di chuột vào nút
              // [ĐÃ SỬA]: Cố định kích thước nút 52x50px và căn giữa nội dung
              style={{
                width: '52px',
                height: '50px',
                borderRadius: '12px',
                border: '1px solid var(--theme-border)',
                backgroundColor: itemBgColor,
                color: isActive ? '#ffffff' : 'var(--theme-text-sub)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                transition: 'all 0.2s ease-in-out'
              }}
            >
              {tab.shortName}
            </button>
          );
        })}
      </nav>

      {/* VIEWPORT CONTAINER SECTOR */}
      {/* [ĐÃ SỬA]: Bọc nội dung bằng thẻ div với padding 40px để tách biệt với viền màn hình */}
      <div style={{ padding: '40px' }}>
        
        {/* CỬA SỔ HIỂN THỊ NỘI DUNG (TAB_WINDOW) */}
        <section 
          className="tab_window" 
          style={{
            backgroundColor: 'var(--theme-bg-surface)',
            padding: '20px',
            borderRadius: '8px',
            border: '1px solid var(--theme-border)'
          }}
        >
          <h3 style={{ marginTop: 0, color: 'var(--theme-text-main)' }}>
            {mockTabs.find(tab => tab.id === activeTab)?.title}
          </h3>
          <p style={{ color: 'var(--theme-text-sub)', lineHeight: '1.6' }}>
            {currentTabContent}
          </p>
        </section>

      </div>
    </div>
  );
}