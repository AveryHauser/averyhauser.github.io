# You must install these libraries first:
# pip install plotly pandas

import plotly.graph_objects as go
import pandas as pd
from datetime import datetime, timedelta

# Define the output file name at the global level
output_file = "project_road_map.html"

def create_block_style_timeline():
    """
    Creates a block-style project timeline with toroidal wrapping.
    Uses shapes and annotations for a more structured, table-like appearance.
    Labels on the left are fixed and do not scroll.
    Features a hybrid dark/light theme with improved aesthetics.
    """
    
    # 1. Define Project Data
    projects_data = {
        "Strategic Initiatives": {
            "color": '#E75A7C',
            "tasks": [
                ("Define Website Framework", (0, 2)),
                ("Plan Special Effects", (2, 1)),
            ]
        },
        "Infrastructure<br>Development": { # HTML tag for line break
            "color": '#58355E',
            "tasks": [
                ("Configure AP & OPNsense", (0, 1)),
                ("Setup Minecraft Server (Docker)", (3, 1)),
            ]
        },
        "Hardware Design": {
            "color": '#7cb374', # Using the darker green
            "tasks": [
                ("Familiarize w/ Arduinos", (0, 1)),
                ("Kit Display (Breadboard)", (1, 1)),
                ("E-Ink Display Integration", (2, 1)),
            ]
        },
        "Advanced Engineering": {
            "color": '#028090',
            "tasks": [
                ("ESP32 Porting", (3, 1)),
                ("Model 3D Case", (4, 1)),
                ("Design Custom PCB", (5, 2)),
                ("3D Print Steel Case", (7, 1)),
            ]
        }
    }

    # Sort categories by the number of tasks (milestones), descending
    sorted_categories = sorted(
        projects_data.items(), 
        key=lambda item: len(item[1]["tasks"]), 
        reverse=True
    )

    # 2. Process data
    base_date = datetime.now().date()
    week_start_date = base_date - timedelta(days=base_date.weekday())
    
    total_weeks = 52
    week_width = 3 # Width for each week
    
    # Constants for layout
    row_height = 1
    category_header_height = 0.2 
    
    label_column_width = 0.1 
    
    current_y = 0
    
    # 3. Create figure
    fig = go.Figure()
    
    # 4. Calculate layout and store task information
    task_blocks = []
    category_sections = []
    
    y_grid_lines = {0.0}
    
    for category, details in sorted_categories:
        color = details["color"]
        category_start_y = current_y
        
        y_grid_lines.add(category_start_y)
        
        current_y += category_header_height
        
        y_grid_lines.add(current_y)
        
        for task_name, (start_week, duration_weeks) in details["tasks"]:
            start_date = week_start_date + timedelta(weeks=start_week)
            end_date = week_start_date + timedelta(weeks=start_week + duration_weeks) - timedelta(days=1)
            
            task_blocks.append({
                "task_name": task_name,
                "start_week": start_week,
                "duration_weeks": duration_weeks,
                "y": current_y,
                "color": color,
                "category": category,
                "start_date": start_date,
                "end_date": end_date
            })
            
            current_y += row_height
            y_grid_lines.add(current_y)
        
        category_sections.append({
            "category": category,
            "color": color,
            "y0": category_start_y,
            "y1": current_y
        })
    
    total_height = current_y
    
    # 5. Draw vertical grid lines (weeks) - TOROIDAL WRAPPING
    extended_weeks = total_weeks * 3 
    for week in range(-total_weeks, extended_weeks + 1):
        x_pos = week * week_width
        fig.add_shape(
            type="line",
            x0=x_pos, x1=x_pos, 
            y0=0, y1=total_height,
            line=dict(color="#cccccc", width=1), 
            layer="below"
        )
    
    # 6. Draw horizontal grid lines (uniform spacing)
    for y_pos in y_grid_lines:
        fig.add_shape(
            type="line",
            x0=-total_weeks * week_width, x1=total_weeks * week_width * 2,
            y0=y_pos, y1=y_pos,
            line=dict(color="#cccccc", width=1), 
            layer="below"
        )
        
    # Step 6b. Draw #0B0D0A rectangles for the gaps within the main grid
    for section in category_sections:
        fig.add_shape(
            type="rect",
            x0=-total_weeks * week_width, x1=total_weeks * week_width * 2,
            y0=section["y0"], y1=section["y0"] + category_header_height,
            fillcolor="#0B0D0A",
            line=dict(width=0),
            layer="below"
        )
    
    # 7. Draw #0B0D0A header blocks for week numbers - TOROIDAL WRAPPING
    week_header_rect_height = 0.8 
    week_header_rect_y_offset = 0.1 

    # Step 6c. Add #0B0D0A "cap" bar to cleanly end grid
    fig.add_shape(
        type="rect",
        x0=-total_weeks * week_width, x1=total_weeks * week_width * 2,
        y0=total_height, y1=total_height + week_header_rect_y_offset,
        fillcolor="#0B0D0A",
        line=dict(width=0),
        layer="above" 
    )
    fig.add_shape(
        type="rect",
        xref="paper", yref="y",
        x0=0, x1=label_column_width,
        y0=total_height, y1=total_height + week_header_rect_y_offset,
        fillcolor="#0B0D0A",
        line=dict(width=0)
    )

    extended_weeks = total_weeks * 3

    for week in range(-total_weeks, extended_weeks):
        current_week_date = week_start_date + timedelta(weeks=week)
        week_number = current_week_date.isocalendar()[1]
        
        x_start = week * week_width
        
        fig.add_shape(
            type="rect",
            x0=x_start, x1=x_start + week_width,
            y0=total_height + week_header_rect_y_offset, 
            y1=total_height + week_header_rect_y_offset + week_header_rect_height,
            fillcolor="#000000",
            line=dict(color="#ffffff", width=2)
        )
        
        fig.add_annotation(
            x=x_start + week_width/2,
            y=total_height + week_header_rect_y_offset + week_header_rect_height/2,
            text=f"<b>Week {week_number}</b>",
            showarrow=False,
            font=dict(size=12, color="#ffffff", family="Arial #0B0D0A"), 
            xanchor="center",
            yanchor="middle"
        )
    
    # 8. Draw colored background rows for each project category (main grid)
    for section in category_sections:
        fig.add_shape(
            type="rect",
            x0=-total_weeks * week_width, x1=total_weeks * week_width * 2,
            y0=section["y0"] + category_header_height, y1=section["y1"],
            fillcolor=section["color"],
            line=dict(width=0),
            opacity=0.15,
            layer="below"
        )
    
    # 8b. Draw category color blocks and labels to the LEFT of the grid (FIXED)
    for section in category_sections:
        fig.add_shape(
            type="rect",
            xref="paper", 
            yref="y",
            x0=0, 
            x1=label_column_width, 
            y0=section["y0"] + category_header_height,
            y1=section["y1"],
            fillcolor=section["color"],
            line=dict(width=0), 
            opacity=0.85,
        )
        
        fig.add_annotation(
            xref="paper", 
            yref="y",
            x=label_column_width / 2, 
            y=(section["y0"] + category_header_height + section["y1"]) / 2,
            text=f"<b>{section['category']}</b>",
            showarrow=False,
            font=dict(size=11, color="white"),
            xanchor="center",
            yanchor="middle",
            textangle=0
        )
        
    # Draw #0B0D0A rectangles for the gaps on the *label column*
    for section in category_sections:
        fig.add_shape(
            type="rect",
            xref="paper",
            yref="y",
            x0=0, x1=label_column_width,
            y0=section["y0"], y1=section["y0"] + category_header_height,
            fillcolor="#0B0D0A",
            line=dict(width=0),
        )
    
    # 9. Draw task blocks (no white borders) - TOROIDAL WRAPPING
    extended_weeks = total_weeks * 3
    
    for block in task_blocks:
        for cycle in range(-1, 2):
            cycle_offset = cycle * total_weeks
            
            for week_offset in range(block["duration_weeks"]):
                week_num = block["start_week"] + week_offset + cycle_offset
                x_start = week_num * week_width
                
                fig.add_shape(
                    type="rect",
                    x0=x_start, x1=x_start + week_width,
                    y0=block["y"], y1=block["y"] + row_height,
                    fillcolor=block["color"],
                    line=dict(width=0),
                    opacity=0.85,
                    layer="below"
                )
            
            task_center_x = (block["start_week"] * week_width) + (block["duration_weeks"] * week_width / 2) + (cycle_offset * week_width)
            task_center_y = block["y"] + row_height/2
            
            fig.add_trace(go.Scatter(
                x=[task_center_x],
                y=[task_center_y],
                mode='markers',
                marker=dict(size=20, color=block["color"], opacity=0.01),
                showlegend=False,
                hovertemplate=(
                    f"<b>Task:</b> {block['task_name']}<br>"
                    f"<b>Project:</b> {block['category']}<br>"
                    f"<b>Duration:</b> {block['duration_weeks']} week(s)<br>"
                    f"<b>Dates:</b> {block['start_date'].strftime('%b %d, %Y')} - {block['end_date'].strftime('%b %d, %Y')}"
                    "<extra></extra>"
                ),
                name=""
            ))
            
            fig.add_annotation(
                x=task_center_x,
                y=task_center_y,
                text=block["task_name"],
                showarrow=False,
                font=dict(size=10, color="white"),
                xanchor="center",
                yanchor="middle"
            )
    
    # 10. Add #0B0D0A border around grid area (not including labels)
    fig.add_shape(
        type="rect",
        x0=-total_weeks * week_width, x1=total_weeks * week_width * 2,
        y0=0, y1=total_height,
        line=dict(color="#000000", width=3),
        fillcolor="rgba(0,0,0,0)"
    )
    
    # Add border around label blocks
    fig.add_shape(
        type="rect",
        xref="paper", 
        yref="y",
        x0=0, 
        x1=label_column_width, 
        y0=0, y1=total_height,
        line=dict(color="#000000", width=3),
        fillcolor="rgba(0,0,0,0)"
    )
    
    # 10b. Add "Current Week" Marker
    today_x = 0
    
    for cycle in range(-1, 2):
        cycle_offset = (cycle * total_weeks) * week_width
        fig.add_shape(
            type="line",
            x0=today_x + cycle_offset, x1=today_x + cycle_offset,
            y0=category_header_height, 
            y1=total_height - 0.025, # <-- CHANGED: Stop just before the top line
            line=dict(color="#ADD8E6", width=3, dash="solid"),
            layer="above"
        )
    
    # 11. Layout configuration with scrollable 8-week window starting at current week
    visible_weeks = 8
    
    start_x = 0
    end_x = visible_weeks * week_width
    
    fig.update_layout(
        title=None,
        xaxis=dict(
            title="",
            range=[start_x, end_x], 
            domain=[label_column_width, 1.0], 
            showticklabels=False,
            showgrid=False,
            zeroline=False,
            showline=False,
            fixedrange=False
        ),
        yaxis=dict(
            title="",
            range=[0, total_height + week_header_rect_y_offset + week_header_rect_height], 
            showticklabels=False,
            showgrid=False,
            zeroline=False,
            showline=False,
            fixedrange=True
        ),
        plot_bgcolor='white',
        paper_bgcolor='#0B0D0A',
        height=total_height * 80 + 100,
        width=1400,
        margin=dict(l=10, r=20, t=60, b=50), 
        showlegend=False,
        hovermode='closest',
        dragmode='pan'
    )
    
    fig.update_xaxes(
        rangeslider=dict(
            visible=True,
            thickness=0.05,
            bgcolor='#33333A',
            bordercolor='#000000',
            borderwidth=2
        )
    )

    # 12. Save to HTML and show in browser
    fig.write_html(output_file)
    fig.show()

# Run the function when the script is executed
if __name__ == "__main__":
    print("Generating your toroidal block-style project timeline...")
    print(f"Saving to {output_file} and opening in your browser.")
    create_block_style_timeline()
    print("Done!")
