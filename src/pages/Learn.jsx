import { Routes, Route } from "react-router-dom";

import LearnIntro from "../education/LearnIntro";
import Chords from "../education/Chords";
import AdvancedChords from "../education/AdvancedChords";
import ReadingNotes from "../education/ReadingNotes";
import EducationLayout from "../education/EducationLayout";

export default function Learn() {
    return <>
        <Routes>
            <Route path="" element={<EducationLayout />}>
                <Route index element={<LearnIntro />} />
                <Route path="reading-notes" element={<ReadingNotes />} />
                <Route path="chords" element={<Chords />} />
                <Route path="advanced-chords" element={<AdvancedChords />} />
            </Route>
        </Routes>
    </>
}