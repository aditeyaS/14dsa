export const Intro = () => {
  return (
    <div className="flex flex-col gap-4">
      <ul className="text-xl list-disc list-inside">
        <li>{`left.val < right.val`}</li>
        <li>all keys are typically distinct</li>
        <li>search, insert, delete - O(log n)</li>
        <li>find closest - O(log n)</li>
        <li>sorted traversal - O(n)</li>
      </ul>
    </div>
  );
};
