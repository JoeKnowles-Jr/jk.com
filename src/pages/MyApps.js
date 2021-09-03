import React from 'react'
import AppDetail from '../components/apps/app.detail'
import AppsPanel from '../components/apps/apps.panel'

const MyApps = () => {
    const [selectedApp, setSelectedApp] = React.useState(null)

    // React.useEffect(() => {
    //     setSelectedApp(null)
    // })

    const clicked = (app) => {
        console.log(app)
        setSelectedApp(app)
    }

    console.log(selectedApp)

    return (
        <div>
            {!selectedApp && <AppsPanel select={clicked} />}
            {selectedApp && <AppDetail close={() => setSelectedApp(null)} app={selectedApp} />}
        </div>
    )
}

export default MyApps