import { useQueries } from "@tanstack/react-query";
import { getCabins } from "../../services/apiCabins";

export function useCabins() {
	const { isLoading, data: cabins } = useQueries({
		queryKey: ["cabins"],
		queryFn: getCabins,
	});

	return { isLoading, cabins };
}
