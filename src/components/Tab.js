export default function Tab({ num, activeTab, onClick }) {
  console.log(`TAB ${num + 1} component rendered with 
    active tab: ${activeTab + 1}`);

  return (
    <button
      className={activeTab === num ? "tab active" : "tab"}
      onClick={() => onClick(num)}
    >
      Tab {num + 1}
    </button>
  );
}
