export default function Integrations() {
  const integrations = [
    { name: 'WhatsApp', color: '#25D366' },
    { name: 'Google Calendar', color: '#4285F4' },
    { name: 'Gmail', color: '#EA4335' },
    { name: 'Slack', color: '#4A154B' },
    { name: 'HubSpot', color: '#FF7A59' },
    { name: 'Notion', color: '#888' },
    { name: 'Salesforce', color: '#E8A838' },
    { name: 'Custom APIs', color: '#6366F1' },
    { name: 'Instagram', color: '#E4405F' },
    { name: 'Microsoft Teams', color: '#0078D4' },
    { name: 'Telegram', color: '#0088CC' },
    { name: 'Zapier', color: '#7B68EE' },
  ]

  return (
    <section id="integrations">
      <div className="container">
        <div className="integrations-header fade-up">
          <h2 className="section-title">Connect With Your Existing Stack</h2>
          <p className="section-sub">Kastik plugs into the tools you already use no rip-and-replace required.</p>
        </div>
        <div className="integrations-grid fade-up stagger-1">
          {integrations.map((item, i) => (
            <div key={i} className="integration-badge">
              <span className="integration-dot" style={{ background: item.color }}></span>
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
