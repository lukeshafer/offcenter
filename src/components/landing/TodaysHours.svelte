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

	const stripMin = (dateStr: string) => {
		const [hours, _1] = dateStr.split(':');
		const [_2, amPm] = dateStr.split(' ');
		return hours! + amPm!.toLowerCase();
	};

	const formatHourRange = (dayHours: DayHours) => {
		return `${stripMin(dayHours.openTime)} - ${stripMin(dayHours.closeTime)}`;
	};

	const getNextOpenDay = (dayNum: WeekDay) => {
		let checkDay = dayNum;
		do {
			if (++checkDay >= 7) checkDay = 0;
			const newDayString = WeekDay[checkDay] as keyof typeof WeekDay;
			const dayHours = hours[newDayString];
			if (!dayHours.closed) return newDayString;
		} while (checkDay !== dayNum);
		return null;
	};

	const getHourString = (hours: WeekHours) => {
		const todayNum = new Date().getDay() as WeekDay;
		const dayString = WeekDay[todayNum] as keyof typeof WeekDay;

		const todaysHours = hours[dayString];
		if (!todaysHours.closed)
			return `Open Today\n${formatHourRange(todaysHours)}`;
		else {
			const nextOpenDay = getNextOpenDay(todayNum);
			if (nextOpenDay) {
				const dayHours = hours[nextOpenDay];
				return `Open ${nextOpenDay}\n${formatHourRange(dayHours)}`;
			}
			return '';
		}
	};

	let hoursToDisplay = getHourString(hours);
</script>

<p>{hoursToDisplay}</p>

<style>
	p {
		background-color: var(--color-primary);
		padding: 0.3em calc(var(--margin-page-h) + 0em);
		margin: 0 calc(var(--margin-page-h) * -1);
		text-transform: capitalize;
		white-space: pre;

		/* text formatting */
		text-shadow: var(--text-shadow);
		font-weight: 600;
		font-size: var(--h-hours-font);
	}
</style>
