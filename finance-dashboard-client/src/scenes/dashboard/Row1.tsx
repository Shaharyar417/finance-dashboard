import DashboardBox from '@/components/DashboardBox'

type Props = {}

const Row1 = (props: Props) => {
    return (
        <>
            <DashboardBox gridArea="c"></DashboardBox>
            <DashboardBox gridArea="b"></DashboardBox>
            <DashboardBox gridArea="d"></DashboardBox>
        </>
    )
}

export default Row1