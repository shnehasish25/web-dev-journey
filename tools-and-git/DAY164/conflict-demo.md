# Anatomy of a Git Merge Conflict

When Git cannot automatically resolve overlapping edits, it inserts conflict markers:

```html
<<<<<<< HEAD (Current branch: main)
<button class="btn btn-primary">Pay via UPI (PhonePe / GPay)</button>
=======
<button class="btn btn-success">Complete Order with NetBanking</button>
>>>>>>> feature-payment (Incoming branch)
```

### Steps to Resolve:
1. Open the file in VS Code (it highlights conflicts with 'Accept Current', 'Accept Incoming', 'Accept Both').
2. Decide what the final code should look like:
   ```html
   <button class="btn btn-primary">Pay via UPI (PhonePe / GPay) or NetBanking</button>
   ```
3. Remove all `<<<<<<<`, `=======`, and `>>>>>>>` marker lines.
4. Run `git add <file>` and complete with `git commit -m "Resolve payment button conflict"`.
