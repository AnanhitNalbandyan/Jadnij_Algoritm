class Activity {
    constructor(name, start, end) {
        this.name = name;
        this.start = start;
        this.end = end;
        this.price = this.calculateComplicatedPrice(start, end);
    }

    calculateSimplePrice(start, end) {
        if (end - 13 >= 13 - start) {
            return 2;
        }
        return 1;
    }

    calculateComplicatedPrice(start, end) {
        if ((end - 13) < 0) return (end - start);
        if ((13 - start) < 0) return (end - start) * 2;
        return (end - 13) * 2 + (13 - start);
    }
}

class Activities {
    constructor(activities) {
        this.activities = activities;
    }
    selectActivities() {
        let sortedActivities = this.sortActivities(this.activities);
        let selectedActivities = [];

        for (let i = 0; i < sortedActivities.length; i++) {
            if (!this.isActivityCrossSelected(selectedActivities, sortedActivities[i]))
                selectedActivities.push(sortedActivities[i]);
        }

        return selectedActivities;
    }

    isActivityCrossSelected(selectedActivities, activity) {
        for (let i = 0; i < selectedActivities.length; i++) {
            if (
                (activity.start < selectedActivities[i].start && activity.end > selectedActivities[i].start) ||
                (activity.start < selectedActivities[i].end && activity.end > selectedActivities[i].end) ||
                (selectedActivities[i].start === activity.start && selectedActivities[i].end === activity.end) ||
                (selectedActivities[i].start < activity.start && selectedActivities[i].end > activity.start) ||
                (selectedActivities[i].start < activity.end && selectedActivities[i].end > activity.end)
            )
                return true;
        }
        return false;
    }

    sortActivities(activities) {
        return activities.sort((a, b) => {
                if (a.price > b.price) return -1;
                else if (a.price < b.price) return 1;
                else if ((a.end - a.start) > (b.end - b.start)) return 1;
                return 0;
            }
        )
    }
}

activities = [
    new Activity("1", 13, 14),
    new Activity("2", 13, 15)
]
console.log(new Activities(activities).selectActivities());