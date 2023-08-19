import styled from "styled-components";
import { useRecentBookings } from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import { useRecentStays } from "./useRecentStays";

const StyledDashboardLayout = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	grid-template-rows: auto 34rem auto;
	gap: 2.4rem;
`;

function DashboardLayout() {
	const { bookings, isLoading: isLoading1 } = useRecentBookings();
	const { stays, confirmedStays, isLoading2 } = useRecentStays();

	if (isLoading1 || isLoading2) return <Spinner />;

	return (
		<StyledDashboardLayout>
			<div>Stats</div>
			<div>Todays activity</div>
			<div>chart stay duration</div>
			<div>chart sales</div>
		</StyledDashboardLayout>
	);
}

export default DashboardLayout;
