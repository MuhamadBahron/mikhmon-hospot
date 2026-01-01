// API untuk sync voucher ke MikroTik
async function syncToMikrotik(voucher, hours) {
    try {
        const response = await fetch('http://192.168.88.1/rest/hotspot/user', {
            method: 'POST',
            headers: {
                'Authorization': 'Basic ' + btoa('admin:password'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: voucher,
                password: voucher,
                "limit-uptime": `${hours}h`,
                disabled: false
            })
        });
        
        return await response.json();
    } catch (error) {
        console.error('Sync error:', error);
    }
}
