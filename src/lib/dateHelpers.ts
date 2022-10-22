interface Hours {
	closed: boolean;
	openTime: string;
	closeTime: string;
}

type WeekHours = Record<keyof typeof WeekDay, Hours>;

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

const formatHourRange = (dayHours: Hours) => {
	return `${stripMin(dayHours.openTime)} - ${stripMin(dayHours.closeTime)}`;
};

const getNextOpenDay = (dayNum: WeekDay, hours: WeekHours) => {
	let checkDay = dayNum;
	do {
		if (++checkDay >= 7) checkDay = 0;
		const newDayString = WeekDay[checkDay] as keyof typeof WeekDay;
		const dayHours = hours[newDayString];
		if (!dayHours.closed) return newDayString;
	} while (checkDay !== dayNum);
	return null;
};

export const getHourString = (hours: WeekHours) => {
	const todayNum = new Date().getDay() as WeekDay;
	const dayString = WeekDay[todayNum] as keyof typeof WeekDay;

	const todaysHours = hours[dayString];
	if (!todaysHours.closed) return `Open Today\n${formatHourRange(todaysHours)}`;
	else {
		const nextOpenDay = getNextOpenDay(todayNum, hours);
		if (nextOpenDay) {
			const dayHours = hours[nextOpenDay];
			return `Open ${nextOpenDay}\n${formatHourRange(dayHours)}`;
		}
		return '';
	}
};
