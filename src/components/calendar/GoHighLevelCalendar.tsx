import React, { ReactNode } from 'react';
import { CalendarDialog } from './CalendarDialog';
import { CalendarBase } from './CalendarBase';
import { GOHIGHLEVEL_DEFAULT } from '@/lib/goHighLevelApi';

interface GoHighLevelCalendarProps {
  calendarId?: string;
  text?: ReactNode;
  className?: string;
  isButton?: boolean;
  size?: "default" | "sm" | "lg";
  styles?: React.CSSProperties;
  onError?: (error: Error) => void;
}

/**
 * GoHighLevel Calendar component that can be used as a button to open a dialog with the calendar,
 * or directly embedded in the page.
 */
const GoHighLevelCalendar: React.FC<GoHighLevelCalendarProps> = ({
  calendarId = GOHIGHLEVEL_DEFAULT.DEFAULT_CALENDAR_ID,
  text = "Book a Demo",
  className = "bg-empire-red hover:bg-empire-red/90 text-white",
  isButton = true,
  size = "default",
  styles,
  onError,
}) => {
  if (isButton) {
    return (
      <CalendarDialog
        calendarId={calendarId}
        text={text}
        className={className}
        size={size}
        onError={onError}
      />
    );
  }

  return (
    <CalendarBase
      calendarId={calendarId}
      className={className}
      styles={styles || { height: '700px' }}
      onError={onError}
    />
  );
};

export default GoHighLevelCalendar; 