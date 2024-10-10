import axios from 'axios';

export const filterData = (category, allTickets, sortOrder) => async (performAction) => {
    try {
        performAction({ type: 'FILTER_DATA_INIT' });

        let isUser = false;
        const uniqueStatuses = new Set();
        let groupedData = [], resultData = [];

        if (category === 'status') {
            allTickets.forEach(ticket => {
                uniqueStatuses.add(ticket.status);
            });

            const statusArray = [...uniqueStatuses];

            statusArray.forEach((status, idx) => {
                const filteredTickets = allTickets.filter(ticket => status === ticket.status);
                resultData.push({
                    [idx]: {
                        title: status,
                        value: filteredTickets
                    }
                });
            });
        } else if (category === 'user') {
            isUser = true;
            allTickets?.allUsers?.forEach((user, idx) => {
                groupedData  = allTickets?.allTickets?.filter((Felem) => {
                    return user.id === Felem.userId;
                })
                resultData.push({
                    [idx]: {
                        title: user.name,
                        value: groupedData
                    }
                });
            });
        } else {
            const priorityList = ["No priority", "Low", "Medium", "High", "Urgent"];

            priorityList.forEach((priority, idx) => {
                const prioritizedTickets = allTickets.filter(ticket => idx === ticket.priority);
                resultData.push({
                    [idx]: {
                        title: priority,
                        value: prioritizedTickets
                    }
                });
            });
        }

        if (sortOrder === "title") {
            resultData.forEach((item, idx) => {
                item[idx]?.value?.sort((a, b) => a.title.localeCompare(b.title));
            });
        }

        if (sortOrder === "priority") {
            resultData.forEach((item, idx) => {
                item[idx]?.value?.sort((a, b) => b.priority - a.priority);
            });
        }

        performAction({ type: 'FILTER_DATA_SUCCESS', payload: { resultData, isUser } });

    } catch (err) {
        performAction({ type: 'FILTER_DATA_FAILURE', payload: err.message });
    }
}

export const loadAllData = () => async (performAction) => {
    try {
        performAction({ type: 'LOAD_DATA_INIT' });

        const response = await axios.get("https://api.quicksell.co/v1/internal/frontend-assignment/");
        const { data } = response;

        performAction({ type: 'LOAD_DATA_SUCCESS', payload: data });

    } catch (err) {
        performAction({ type: 'LOAD_DATA_FAILURE' });
    }
}
