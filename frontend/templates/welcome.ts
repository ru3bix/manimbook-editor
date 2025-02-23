import { Notebook } from "@/types/notebook";

const welcome_template : Notebook =  {
  cells: [
    {
      type: 'markdown',
      content: "# Welcome to ManimBooks!",
      outputs: [],
      id: "e65a32d7-ec96-42d1-a952-88726719a594",
    }, {
      type: 'markdown',
      content: "ManimBooks have all the basic features of a book\n\n# This is a heading\n## This is a subheading\n### This is a subsubheading\n\n#### *and so on*\n\n~Every~ (more than every) feature for text formatting **is present**\n\nFor example,\n- this\n- is\n- an\n- unordered\n- list\n\nBut you can still do much more . . .",
      outputs: [],
      id: "62b0f16e-7ae1-42f7-b22f-03c6862d2652",
    }, {
      type: 'markdown',
      content: "## Manimations",
      outputs: [],
      id: "79356fcb-9962-49d9-a63d-a9cc21e82e97",
    }, {
      type: 'markdown',
      content: "Well, you can",
      outputs: [],
      id: "2c21e250-ebb0-4769-93c8-7d00d0f5467e",
    }, {
      type: 'code',
      content: "class CircleToSquare(Scene):\n    def construct(self):\n        blue_circle = Circle(color=BLUE, fill_opacity=0.5)\n        green_square = Square(color=GREEN, fill_opacity=0.8)\n        self.play(Create(blue_circle))\n        self.wait()\n        \n        self.play(Transform(blue_circle, green_square))\n        self.wait()",
      outputs: [],
      id: "66e104c0-56ad-4c33-b4a9-221bd04697e9",
    }, {
      type: 'markdown',
      content: "Transform circles into squares",
      outputs: [],
      id: "83d90be4-91c2-4d17-9d0a-699ba972e078",
    }, {
      type: 'code',
      content: "class CircleAnnouncement(Scene):\n    def construct(self):\n        blue_circle = Circle(color=BLUE, fill_opacity=0.5)\n        announcement = Text(\"Let us draw a circle.\")\n        \n        self.play(Write(announcement))\n        self.wait()\n        \n        self.play(announcement.animate.next_to(blue_circle, UP, buff=0.5))\n        self.play(Create(blue_circle))",
      outputs: [],
      id: "5cbbd975-006a-4164-a23e-0b90c45cd919",
    }, {
      type: 'markdown',
      content: "Write some text",
      outputs: [],
      id: "e559569b-a620-4303-94c6-c56f226681d0",
    }, {
      type: 'code',
      content: "class AnimateSyntax(Scene):\n    def construct(self):\n        triangle = Triangle(color=RED, fill_opacity=1)\n        self.play(DrawBorderThenFill(triangle))\n        self.play(triangle.animate.shift(LEFT))\n        self.play(triangle.animate.shift(RIGHT).scale(2))\n        self.play(triangle.animate.rotate(PI/3))",
      outputs: [],
      id: "2524aa71-29ff-4b54-892b-78667f68b531",
    }, {
      type: 'markdown',
      content: "And keep playing with shapes . . .",
      outputs: [],
      id: "a7c18e87-b348-4e2e-bb47-1c2ea545f43b",
    }, {
      type: 'code',
      content: "class DifferentRotations(Scene):\n    def construct(self):\n        left_square = Square(color=BLUE, fill_opacity=0.7).shift(2 * LEFT)\n        right_square = Square(color=GREEN, fill_opacity=0.7).shift(2 * RIGHT)\n        \n        self.play(\n            left_square.animate.rotate(PI),\n            Rotate(right_square, angle=PI),\n            run_time=2\n        )\n        \n        self.wait()\n",
      outputs: [],
      id: "021c460e-034b-4960-a119-0243b00fbb6e",
    }, {
      type: 'code',
      content: "class CauchyIntegralFormula(Scene):\n    def construct(self):\n        formula = MathTex(\n            r\"[z^n]f(z) = \\frac{1}{2\\pi i}\\oint_{\\gamma} \\frac{f(z)}{z^{n+1}}~dz\"\n        )\n        self.play(Write(formula), run_time=3)\n        self.wait()\n",
      outputs: [],
      id: "7fc23c8d-d879-43f7-844c-615c0fdf64ca",
    }, {
      type: 'markdown',
      content: "And also write geeky text",
      outputs: [],
      id: "9def7227-d04a-4235-8cf9-f7061bbaf362",
    }, {
      type: 'code',
      content: "class TransformEquation(Scene):\n    def construct(self):\n        eq1 = MathTex(\"42 {{ a^2 }} + {{ b^2 }} = {{ c^2 }}\")\n        eq2 = MathTex(\"42 {{ a^2 }} = {{ c^2 }} - {{ b^2 }}\")\n        eq3 = MathTex(r\"a^2 = \\frac{c^2 - b^2}{42}\")\n\n        self.add(eq1)\n        self.wait()\n        self.play(TransformMatchingTex(eq1, eq2))\n        self.wait()\n        self.play(TransformMatchingShapes(eq2, eq3))\n        self.wait()\n",
      outputs: [],
      id: "07240885-f5e0-4167-96af-118a01a9fbb2",
    }, {
      type: 'markdown',
      content: "## Advanced Manimations\nAnd you can go crazier still . . .",
      outputs: [],
      id: "2c3b4766-6eee-41ab-87a7-aea3d5878468",
    }, {
      type: 'code',
      content: "class FormulaEmphasis(Scene):\n    def construct(self):\n        product_formula = MathTex(\n            r\"\\frac{d}{dx} f(x)g(x) =\",\n            r\"f(x) \\frac{d}{dx} g(x)\",\n            r\"+\",\n            r\"g(x) \\frac{d}{dx} f(x)\"\n        )\n\n        self.play(Write(product_formula))\n\n        # Create a surrounding rectangle around the first derivative term\n        box1 = SurroundingRectangle(product_formula[1], buff=0.1)\n        box2 = SurroundingRectangle(product_formula[3], buff=0.1)\n\n        self.play(Create(box1))\n        self.wait()\n\n        # Transform the box from the first term to the second term\n        self.play(Transform(box1, box2))\n        self.wait()\n",
      outputs: [],
      id: "21e0de23-6204-470f-9f35-29ca4fdc5c21",
    }, {
      type: 'code',
      content: "\nclass PlotExample(Scene):\n    def construct(self):\n        plot_axes = Axes(\n            x_range=[0, 1, 0.05],\n            y_range=[0, 1, 0.05],\n            x_length=9,\n            y_length=5.5,\n            axis_config={\n                \"numbers_to_include\": np.arange(0, 1 + 0.1, 0.1),\n                \"font_size\": 24,\n            },\n            tips=False,\n        )\n\n        # Labels for the axes\n        y_label = plot_axes.get_y_axis_label(\"y\", edge=LEFT, direction=LEFT, buff=0.4)\n        x_label = plot_axes.get_x_axis_label(\"x\")\n        plot_labels = VGroup(x_label, y_label)\n\n        # Generate multiple plots for y = x^n and y = x^(1/n)\n        plots = VGroup()\n        for n in np.arange(1, 20 + 0.5, 0.5):\n            plots += plot_axes.plot(lambda x: x**n, color=WHITE)\n            plots += plot_axes.plot(\n                lambda x: x**(1 / n), color=WHITE, use_smoothing=False\n            )\n\n        # Extra graphical elements\n        extras = VGroup()\n        extras += plot_axes.get_horizontal_line(plot_axes.c2p(1, 1, 0), color=BLUE)\n        extras += plot_axes.get_vertical_line(plot_axes.c2p(1, 1, 0), color=BLUE)\n        extras += Dot(point=plot_axes.c2p(1, 1, 0), color=YELLOW)\n\n        # Title\n        title = Title(\n            r\"Graphs of $y=x^{\\frac{1}{n}}$ and $y=x^n$ (for $n=1, 1.5, 2, 2.5, 3, \\dots, 20$)\",\n            include_underline=False,\n            font_size=40,\n        )\n        \n        # Animations\n        self.play(Write(title))\n        self.play(Create(plot_axes), Create(plot_labels), Create(extras))\n        self.play(AnimationGroup(*[Create(plot) for plot in plots], lag_ratio=0.05))\n",
      outputs: [],
      id: "212369e9-cd6e-41d7-baae-5051964a74b3",
    }, {
      type: 'code',
      content: "import networkx as nx\nimport numpy as np\n\n# Generate a random Erdős-Rényi graph with 14 nodes and a 50% connection probability\nnxgraph = nx.erdos_renyi_graph(14, 0.5)\n\nclass ErdosRenyiGraph(Scene):\n    def construct(self):\n        # Create a Graph object from the NetworkX graph\n        G = Graph.from_networkx(nxgraph, layout=\"spring\", layout_scale=3.5)\n\n        # Create the graph animation\n        self.play(Create(G))\n        self.wait()\n\n        # Move the vertices into a circular arrangement\n        self.play(*[\n            G[v].animate.move_to(\n                5 * RIGHT * np.cos(ind / 7 * PI) + 3 * UP * np.sin(ind / 7 * PI)\n            )\n            for ind, v in enumerate(G.vertices)\n        ])\n        self.wait()\n\n        # Uncreate the graph\n        self.play(Uncreate(G))\n",
      outputs: [],
      id: "b30090f6-cec3-4a47-9e40-8b832f1f8d57",
    }, {
      type: 'code',
      content: "from manim import *\nimport numpy as np\n\nclass OpeningManim(Scene):\n    def construct(self):\n        # Title and Basel's summation formula\n        title = Tex(r\"This is some \\LaTeX\")\n        basel = MathTex(r\"\\sum_{n=1}^\\infty \\frac{1}{n^2} = \\frac{\\pi^2}{6}\")\n\n        # Arrange them vertically\n        VGroup(title, basel).arrange(DOWN, buff=0.5)\n\n        # Animate the appearance of the title and formula\n        self.play(\n            Write(title),\n            FadeIn(basel, shift=UP),\n        )\n        self.wait()\n\n        # Transition to a new title\n        transform_title = Tex(\"That was a transform\")\n        transform_title.to_corner(UP + LEFT)\n\n        self.play(\n            Transform(title, transform_title),\n            LaggedStart(*[FadeOut(obj, shift=DOWN) for obj in basel]),\n        )\n        self.wait()\n\n        # Create a number plane (grid)\n        grid = NumberPlane(\n            x_range=(-10, 10, 1),\n            y_range=(-6.0, 6.0, 1)\n        )\n\n        grid_title = Tex(\"This is a grid\")\n        grid_title.scale(1.5)\n        grid_title.move_to(transform_title)\n\n        # Display the grid and its title\n        self.add(grid, grid_title)\n        self.play(\n            FadeOut(title),\n            FadeIn(grid_title, shift=DOWN),\n            Create(grid, run_time=3, lag_ratio=0.1),\n        )\n        self.wait()\n\n        # Non-linear transformation on the grid\n        grid_transform_title = Tex(\n            r\"That was a non-linear function \\\\ applied to the grid\"\n        )\n        grid_transform_title.move_to(grid_title, UL)\n\n        # Prepare the grid for transformation\n        grid.prepare_for_nonlinear_transform()\n\n        # Apply a sine-based transformation\n        self.play(\n            grid.animate.apply_function(\n                lambda p: p + np.array([np.sin(p[1]), np.sin(p[0]), 0])\n            ),\n            run_time=3,\n        )\n        self.wait()\n\n        # Transform the grid title\n        self.play(Transform(grid_title, grid_transform_title))\n        self.wait()\n",
      outputs: [],
      id: "6a950acd-ff11-47b5-a244-347a465d8cc5",
    }, {
      type: 'markdown',
      content: "Your imagination is the only limit. Manim is the GOAT, ManimBooks brings it where you need it the most, books ",
      outputs: [],
      id: "da010291-5379-4cd0-b4db-df25da65cdd9",
    }
  ],
  metadata: {
    kernelspec: {
      name: 'python3',
      display_name: 'Python 3',
    },
    language_info: {
      name: 'python',
      version: '3.8',
    },
  }
}

export default welcome_template;