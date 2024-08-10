import DashboardBox from '@/components/DashboardBox'

type Props = {}

const Row2 = (props: Props) => {
    return (
        <>
            <DashboardBox gridArea="e"></DashboardBox>
            <DashboardBox gridArea="f"></DashboardBox>
            <DashboardBox gridArea="a"></DashboardBox>
        </>
    )
}

export default Row2