const STORAGE_KEY = "daily-progress";

function safeParse(value) {
    try {
        return JSON.parse(value);
    } catch {
        return {};
    }
}

export function loadDailyProgress() {
    if (typeof window === "undefined") return {};
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value ? safeParse(value) : {};
}

export function saveDailyProgress(progress) {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function loadDailyState(date, difficulty) {
    const progress = loadDailyProgress();
    return progress?.[date]?.[difficulty] ?? null;
}

export function saveDailyState(date, difficulty, state) {
    const progress = loadDailyProgress();
    progress[date] = {
        ...progress[date],
        [difficulty]: {
            ...progress[date]?.[difficulty],
            ...state
        }
    };
    saveDailyProgress(progress);
    return progress;
}

export function isDailyCompleted(date, difficulty) {
    const state = loadDailyState(date, difficulty);
    return Boolean(state?.completed);
}

export function markDailyCompleted(date, difficulty) {
    const progress = loadDailyProgress();
    const existing = progress?.[date]?.[difficulty] ?? {};
    progress[date] = {
        ...progress[date],
        [difficulty]: {
            ...existing,
            completed: true
        }
    };
    saveDailyProgress(progress);
    return progress;
}
