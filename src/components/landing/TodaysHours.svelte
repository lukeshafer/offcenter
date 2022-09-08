<script lang="ts">
	interface dayHoursClosed {
		closed: true;
		openTime: never;
		closeTime: never;
	}

	interface dayHoursOpen {
		closed: false;
		openTime: string;
		closeTime: string;
	}

	type DayHours = dayHoursClosed | dayHoursOpen;

	type WeekHours = Record<keyof typeof WeekDay, DayHours>;

	export let hours: WeekHours;

	enum WeekDay {
		sunday = 0,
		monday,
		tuesday,
		wednesday,
		thursday,
		friday,
		saturday,
	}

	const dayInt = new Date().getDay();
	const dayString = WeekDay[new Date().getDay()];

	const checkIfDayIsValid = (
		dayString: string
	): dayString is keyof DayHours => {
		return Object.hasOwn(hours, dayString);
	};

	if (checkIfDayIsValid(dayString)) {
		const l = hours[dayString];
	}
</script>

<p>Open 4pm - 10pm!</p>

<style>
	p {
		background-color: var(--color-primary);
		padding: 0.3em calc(var(--margin-page-h) + 0em);
		margin: 0 calc(var(--margin-page-h) * -1);

		/* text formatting */
		text-shadow: var(--text-shadow);
		font-weight: 600;
		font-size: var(--h-hours-font);
	}
</style>
