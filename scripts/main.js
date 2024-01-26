function updateTimeProgress() {
    const now = new Date();

    const startOfYear = new Date(now.getFullYear(), 0, 1);
    const endOfYear = new Date(now.getFullYear() + 1, 0, 1);
    const yearProgress = (now - startOfYear) / (endOfYear - startOfYear);
    document.getElementById("yearBar").style.width = (yearProgress * 100) + '%';

    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 1);
    const monthProgress = (now - startOfMonth) / (endOfMonth - startOfMonth);
    document.getElementById("monthBar").style.width = (monthProgress * 100) + '%';

    const nowForWeek = new Date();
    const dayOfWeek = nowForWeek.getDay(); // Day of week (0 is Sunday)
    const startOfWeek = new Date(nowForWeek.getFullYear(), nowForWeek.getMonth(), nowForWeek.getDate() - dayOfWeek);
    const endOfWeek = new Date(startOfWeek.getFullYear(), startOfWeek.getMonth(), startOfWeek.getDate() + 7);
    const weekProgress = (now - startOfWeek) / (endOfWeek - startOfWeek);

    const startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const endOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    const dayProgress = (now - startOfDay) / (endOfDay - startOfDay);
    document.getElementById("dayBar").style.width = (dayProgress * 100) + '%';

    const startOfHour = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours());
    const endOfHour = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours() + 1);
    const hourProgress = (now - startOfHour) / (endOfHour - startOfHour);
    document.getElementById("hourBar").style.width = (hourProgress * 100) + '%';

    const startOfMinute = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes());
    const endOfMinute = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes() + 1);
    const minuteProgress = (now - startOfMinute) / (endOfMinute - startOfMinute);
    document.getElementById("minuteBar").style.width = (minuteProgress * 100) + '%';

    
    function updateBar(id, progress) {
        const bar = document.getElementById(id);
        const percentage = (progress * 100).toFixed(0) + '%';
        bar.style.width = percentage;
        bar.textContent = percentage;
    }

    updateBar("yearBar", yearProgress);
    updateBar("monthBar", monthProgress);
    updateBar("weekBar", weekProgress);
    updateBar("dayBar", dayProgress);
    updateBar("hourBar", hourProgress);
    updateBar("minuteBar", minuteProgress);
}

setInterval(updateTimeProgress, 600);

document.addEventListener('DOMContentLoaded', updateTimeProgress);
